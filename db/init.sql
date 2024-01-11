-- CREATE DATABASE IF NOT EXISTS codrrdb
SELECT 'CREATE DATABASE charlydb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'charlydb')\gexec