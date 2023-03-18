import DeskCustomer from "./DeskCustomer";
import MobileCustomer from "./MobileCustomer";

const CustomerSay = () => {
  return (
    <section id='customer' className="">
        <h4 className="text-[32px] font-extrabold leading-8 text-center">What Bitly customers are saying</h4>
        <div className="">
          <DeskCustomer />
          <MobileCustomer />
        </div>
    </section>
  );
}

export default CustomerSay;