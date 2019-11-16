**Set up Instance:**
Do all the normal stuff \n
chmod 400 something idk
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_6.x | sudo -E bash -
sudo yum install nodejs
sudo yum install git
git clone my repo
cd my repo
git checkout review
sudo npm install
npm run server

**Set up Database:**
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
sudo rpm -Uvh mysql80-community-release-el6-n.noarch.rpm
sudo yum-config-manager --disable mysql80-community
sudo yum-config-manager --enable mysql57-community
sudo yum install mysql-community-server
sudo service mysqld start
sudo grep 'temporary password' /var/log/mysqld.log
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';

I later deleted the validate password plugin so I could set a simpler password
I also needed to create users for my micros and give them permission

CREATE USER 'Marcus'@'Instance Ip' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'Marcus'@'Instance Ip';

**Seeding DataBase:**
I changed the host address to the address of my database instance
npm run seed

**Endpoints:**
Get /api/reviews?shoe_id=<id>
Post /api/reviews
Put /api/reviews?shoe_id=<id>
Delete /api/reviews?shoe_id=<id>
  
**Speed Testing:**

Micro

| Method | 1 rps | 10 rps | 100 rps | 1000rps | 5000 rps |
|--------|-------|--------|---------|---------|----------|
| Get | 76 ms, %0 err | 75 ms, %0 err | 73 ms, %0 err | 1733ms, %0 err |
| Post | 78 ms, %0 err | 72 ms, %0 err | 72 ms, %0 err | 72 ms, %0 err | 2809 ms, %54.5 err |

My load balancer

| Method | 1 rps | 10 rps | 100 rps | 1000rps |
|--------|-------|--------|---------|---------|
| Get | bad | worse | terrible | god help me |
| Post | PLEASE | MAKE | IT | STOP |

Nginx load balancer

| Method | 1 rps | 10 rps | 100 rps | 1000 rps | 5000 rps | 3000 rps |
|--------|-------|--------|---------|----------|----------|----------|
| Get | 73 ms, %0 err | 75 ms, %0 err | 72 ms, %0 err | 73 ms, %0 err | didn't work | 1533 ms, %30.1 err |
| Post | 79 ms, %0 err | 72ms, %0.2 err | 70ms, %0 err | 71ms, %0 err | 775ms, %51 err |
