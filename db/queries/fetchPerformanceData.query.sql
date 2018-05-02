SELECT 
  table_sizes.array AS table_sizes,
  slow_queries.array AS slow_queries,
  costly_queries.array AS costly_queries
FROM (
      SELECT ARRAY (
        SELECT
          JSON_BUILD_OBJECT(
            'query', query,
            'calls', calls,
            'totalTime', total_time,
            'minTime', min_time,
            'maxTime', max_time,
            'meanTime', mean_time,
            'rows', rows,
            'hitPercent', 100.0 * shared_blks_hit / nullif(shared_blks_hit + shared_blks_read, 0)
          )
        FROM pg_stat_statements
        ORDER BY total_time DESC LIMIT 50
      )
    ) AS costly_queries,
    (
      SELECT ARRAY(
        SELECT
          JSON_BUILD_OBJECT(
            'query', query,
            'calls', calls,
            'totalTime', total_time,
            'minTime', min_time,
            'maxTime', max_time,
            'meanTime', mean_time,
            'rows', rows,
            'hitPercent', 100.0 * shared_blks_hit / nullif(shared_blks_hit + shared_blks_read, 0)
          )
        FROM pg_stat_statements
        ORDER BY max_time DESC LIMIT 50
      )
    ) AS slow_queries,
    (
      SELECT ARRAY (
        SELECT
          JSON_BUILD_OBJECT(
            'relation', nspname || '.' || relname,
            'totalSize', pg_size_pretty(pg_total_relation_size(C.oid))
          )
        FROM pg_class C
        LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
        WHERE nspname NOT IN ('pg_catalog', 'information_schema')
          AND C.relkind <> 'i'
          AND nspname !~ '^pg_toast'
          AND pg_total_relation_size(C.oid) > 8192
        ORDER BY pg_total_relation_size(C.oid) DESC
      )
    ) AS table_sizes
      
