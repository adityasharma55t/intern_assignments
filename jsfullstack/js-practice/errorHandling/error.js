const errorHandler = () => {
  try {
    console.log(a);
    throw new Error("Deliberate Error");
  } catch (error) {
    console.log("Error Handled!");
  } finally {
    console.log("Executed");
  }
};

errorHandler();
