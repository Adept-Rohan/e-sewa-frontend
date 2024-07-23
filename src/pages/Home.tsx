import { AiOutlineArrowRight } from "react-icons/ai";
import SUBASH from "../assets/subash.png";
import axios from "axios";
import { PaymentFormData } from "../types/globalType";

const Home = () => {
  const handleEsewaPayment = async () => {
    console.log("e-sewa service will be executed here ");

    const data = {
      amount: "2",
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/create/order",
        data
      );

      console.log("🚀 ~ handleEsewaPayment ~ response:", response);

      if (response?.status === 201) {
        console.log("the functioonal part of e sewa");

        esewaCall(response?.data?.formData);
      } else console.error("Failed to create an Order");
    } catch (error) {
      console.log(error);
    }
  };

  const esewaCall = (formData: PaymentFormData) => {
    console.log(formData);
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";
    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key as never]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="p-12 w-1/2">
      <div className="group relative">
        <div className=" mt-4 w-full h-96 cursor-pointer overflow-hidden">
          <img
            className="w-full h-full object-contain group-hover:scale-110 duration-500"
            src={SUBASH}
            alt=""
          />
          1
        </div>
        <div className="w-full border-[1px] cursor-pointer px-2 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-titleFont font-bold text-base">
                Subash Limbu
              </h2>
              <p className="text-base">Pig</p>
            </div>
            <div className="flex gap-2 justify-end relative overflow-hidden w-28 text-sm">
              <div className="flex gap-2 z-30 transform  group-hover:translate-x-24 transition-transform duration-500">
                <p className="font-semibold">$ 2</p>
              </div>
              <p
                onClick={handleEsewaPayment}
                className="absolute z-20 w-[300px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform-translate-x-40  group-hover:translate-x-48 transition-transform duration-500 cursor-pointer"
              >
                Pay By Esewa
                <span>
                  <AiOutlineArrowRight />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
