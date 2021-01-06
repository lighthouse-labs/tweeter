INSERT INTO users(name, avatar, handle)
VALUES('Newton', 'https://i.imgur.com/73hZDYK.png', 'SirIsaac'),
('Descartes', 'https://i.imgur.com/nlhLi3I.png', 'rd'),
('User_default', 'https://i.imgur.com/73hZDYK.png', 'def_user');

INSERT INTO tweets(user_id, text, created_at)
VALUES(1,
'If I have seen further it is by standing on the shoulders of giants',
CURRENT_TIMESTAMP),
(2, 
'Je pense , donc je suis',
CURRENT_TIMESTAMP);

INSERT INTO likes (tweet_id, user_id)
VALUES(1, 2),
(2, 1);

INSERT INTO retweets (tweet_id, retweeter_id, created_at)
VALUES(1, 2, CURRENT_TIMESTAMP),
(2, 1, CURRENT_TIMESTAMP);