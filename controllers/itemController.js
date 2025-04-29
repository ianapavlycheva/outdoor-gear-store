exports.getItem = (req, res) => {
  res.send(`Get item ${req.params.id}`);
};

exports.createItem = (req, res) => {
  res.send("Create an item");
};

exports.updateItem = (req, res) => {
  res.send(`Update item ${req.params.id}`);
};

exports.deleteItem = (req, res) => {
  res.send(`Delete item ${req.params.id}`);
};
