import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="md:ml-[250px] px-2 mx-2 w-[400px]  mt-[20px] flex flex-col">
      <div>
        <h1 className="text-5xl text-center py-5">Contact us</h1>
      </div>
      <div className="my-20">
        <div className="w-full flex justify-center my-5">
          <TextField
            fullWidth
            disabled
            value="Vikas Chaudhari"
            label="Fullname"
            variant="outlined"
          />
        </div>

        <div className="w-full flex justify-center my-5">
          <TextField
            fullWidth
            disabled
            value="vikas79725@gmail.com"
            label="Email"
            variant="outlined"
          />
        </div>

        <div className="w-full flex justify-center my-5">
          <TextField
            fullWidth
            placeholder="Enter your thoughts here."
            label="Message"
            variant="outlined"
          />
        </div>

        <div className="my-2 flex w-full text-white">
          <button className="bg-blue-600 w-full py-4 rounded-md text-xl">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
