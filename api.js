home = (req, res) => {
  res.send('this is home');
};

login = (req, res) => {
  res.send('this is login');
};

const getUser = (req, res) => {
  const users = [
    {
      PIAIC123: 'PIAIC123',
      name: 'umair',
    },
    {
      PIAIC245: 'PIAIC245',
      name: 'osama',
    },
  ];
  const filteredUser = users.find(
    (user) =>
      user[req.query.id] === req.query.id && user.name === req.query.name
  );
  console.log(filteredUser);
  res.send(filteredUser);
};

module.exports = {
  home,
  login,
  getUser,
};
