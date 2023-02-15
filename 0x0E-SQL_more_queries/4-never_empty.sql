-- Check if the table exists
USE database_name;
SELECT * FROM information_schema.tables WHERE table_name = 'id_not_null' LIMIT 1;

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS id_not_null (
  id INT DEFAULT 1,
  name VARCHAR(256)
);
