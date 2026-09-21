exports.up = (pgm) => {
  pgm.addColumn("users", {
    fullname: {
      type: "varchar(160)",
      notNull: true,
    },
  });
};

exports.down = false;
