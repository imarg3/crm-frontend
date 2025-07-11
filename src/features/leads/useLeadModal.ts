import { useState } from "react";

function useLeadModal() {
    const [modalShow, setModalShow] = useState(false);

    const [modalLeadId, setModalLeadId] = useState(0);
    const [modalCustomerName, setModalCustomerName] = useState("");

    return {
        modalShow,
        setModalShow,

        modalLeadId,
        setModalLeadId,
        modalCustomerName,
        setModalCustomerName
    };
}

export default useLeadModal;