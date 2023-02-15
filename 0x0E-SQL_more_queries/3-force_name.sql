-- Check if the table exists
USE database_name;
SELECT * FROM information_schema.tables WHERE table_name = 'force_name' LIMIT 1;

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS force_name (
  id INT,
  name VARCHAR(256) NOT NULL
);
