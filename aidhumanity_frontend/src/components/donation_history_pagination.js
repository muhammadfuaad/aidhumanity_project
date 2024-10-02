import React, {useState, useEffect} from "react";
import Donation_history_items from "./donation_history_items";

function Donation_history_pagination() {
 const [cards, setCards] = useState([]); 
 const data = [
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50",
   "card_number": "1"
  },
  {
    "donor_name": "Muhammad Fuaad",
    "location": "Arya Nagar",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Rohingya Emergency",
   "category": "Disaster And Emergency Appeals",
   "amount": "£231.50",
   "card_number": "2"
  },
  {
    "donor_name": "Zeeshan Sarwar",
    "location": "Okara",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£10",
   "card_number": "3"
  },
  {
    "donor_name": "Saad Mirza",
    "location": "PCSIR II",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£23",
   "card_number": "4"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50",
   "card_number": "5"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50",
   "card_number": "6"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50",
   "card_number": "7"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50",
   "card_number": "8"
  },
  {
    "donor_name": "Ron Hill",
    "location": "Great Britain",
    "date": "Tue 12 Dec, 08:15",
    "appeal": "Water Hands Pumps Uganda",
   "category": "Water for All",
   "amount": "£231.50",
   "card_number": "9"
  }, 
]

  useEffect (()=> {
    setCards(data);
  })
  return (
    <div>
      <Donation_history_items data = { cards } />
    </div>
  );
}
export default Donation_history_pagination;