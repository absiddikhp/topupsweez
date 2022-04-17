import { useEffect } from "react";
export const DaimonSelected = () => {
  useEffect(() => {
    const daimonCard = document.querySelectorAll(".daimonCard");
    daimonCard.forEach((card) => {
      card.addEventListener("click", () => {
        reset();
        card.classList.add("daimonCardActive");
      });
    });
    function reset() {
      daimonCard.forEach((card) => {
        card.classList.remove("daimonCardActive");
      });
    }
  }, []);
};
