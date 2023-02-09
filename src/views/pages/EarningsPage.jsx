
import PaymentMethod from "../components/PaymentMethod";
import Stats from "../components/Stats";
import TransactionHistory from "../components/TransactionHistory";
import Nav from "../layouts/Nav";

const EarningsPage = () => {
    return (
        <Nav>
            <div className="flex flex-col gap-[30px]">
                <Stats />
                <TransactionHistory />
                <PaymentMethod />
            </div>
        </Nav>
    );
}

export default EarningsPage;