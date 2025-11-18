
-- Database: tech_community_hub

CREATE DATABASE IF NOT EXISTS tech_community_hub;
USE tech_community_hub;

-- 1. Homepage / Highlights
CREATE TABLE highlights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150),
  description TEXT,
  image_url VARCHAR(255),
  link_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. About Us
CREATE TABLE team_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  role VARCHAR(100),
  bio TEXT,
  photo_url VARCHAR(255),
  social_links TEXT
);

CREATE TABLE about_info (
  id INT AUTO_INCREMENT PRIMARY KEY,
  section_title VARCHAR(100),
  content TEXT
);

-- 3. Blogs
CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  category VARCHAR(100),
  author VARCHAR(100),
  content TEXT,
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE blog_comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  blog_id INT,
  name VARCHAR(100),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (blog_id) REFERENCES blogs(id) ON DELETE CASCADE
);

-- 4. Events
CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150),
  description TEXT,
  date DATE,
  location VARCHAR(150),
  banner_url VARCHAR(255),
  registration_link VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE event_registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  event_id INT,
  full_name VARCHAR(100),
  email VARCHAR(150),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE
);

-- 5. Projects
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  description TEXT,
  tech_stack VARCHAR(150),
  creator_name VARCHAR(100),
  project_link VARCHAR(255),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Discussion Forums
CREATE TABLE forums (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100),
  description TEXT
);

CREATE TABLE forum_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  forum_id INT,
  title VARCHAR(200),
  author VARCHAR(100),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (forum_id) REFERENCES forums(id) ON DELETE CASCADE
);

CREATE TABLE forum_replies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  post_id INT,
  author VARCHAR(100),
  reply TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES forum_posts(id) ON DELETE CASCADE
);

-- 7. Members / Dashboard
CREATE TABLE members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(150),
  email VARCHAR(150) UNIQUE,
  password VARCHAR(255),
  role ENUM('member', 'admin', 'moderator') DEFAULT 'member',
  bio TEXT,
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE member_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT,
  title VARCHAR(200),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE
);

CREATE TABLE polls (
  id INT AUTO_INCREMENT PRIMARY KEY,
  question TEXT,
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES members(id) ON DELETE SET NULL
);

CREATE TABLE poll_options (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poll_id INT,
  option_text VARCHAR(255),
  FOREIGN KEY (poll_id) REFERENCES polls(id) ON DELETE CASCADE
);

CREATE TABLE poll_votes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  poll_id INT,
  option_id INT,
  member_id INT,
  FOREIGN KEY (poll_id) REFERENCES polls(id),
  FOREIGN KEY (option_id) REFERENCES poll_options(id),
  FOREIGN KEY (member_id) REFERENCES members(id)
);

-- 8. Donations / Support
CREATE TABLE donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_name VARCHAR(100),
  email VARCHAR(150),
  amount DECIMAL(10,2),
  method ENUM('MPESA', 'Bank', 'PayPal', 'Stripe'),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sponsorship_tiers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tier_name VARCHAR(100),
  description TEXT,
  benefits TEXT,
  amount DECIMAL(10,2)
);

CREATE TABLE impact_stories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  story TEXT,
  author VARCHAR(100),
  image_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 9. Contact / Communication
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  subject VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 10. Social Media / Settings
CREATE TABLE settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  setting_name VARCHAR(100),
  setting_value TEXT
);
