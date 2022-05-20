const responsify = require("../utils/responsify");

const router = require("express").Router();

router.get("/", async (req, res) => {
  data = [
    {
      id: "10",
      first_name: "Roy",
      last_name: "Mustang",
      phone: "9860773808",
      address: "Kathmandu",
    },
    {
      id: "12",
      first_name: "Jon",
      last_name: "Titor",
      phone: "9860773808",
      address: "Bhaktapur",
    },
    {
      id: "15",
      first_name: "Ed",
      last_name: "Elric",
      phone: "9860773808",
      address: "Bhaktapur",
    },
    {
      id: "16",
      first_name: "Vans",
      last_name: "Stampeed",
      phone: "9866778833",
      address: "Lalitpur",
    },
  ];

  res.json(responsify.success("000", "users found", data));
});

module.exports = router;
