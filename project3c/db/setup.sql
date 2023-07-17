USE project3c;

CREATE TABLE users(
  id INT AUTO_INCREMENT;
  first_name TEXT;
  last_name TEXT;
  credit_card_number INT;
  credit_card_provider TEXT;
  PRIMARY KEY (id)
)