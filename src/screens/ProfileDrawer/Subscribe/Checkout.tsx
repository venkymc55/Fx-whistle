// import React, { useState } from "react";
// import { ScrollView } from "react-native-gesture-handler";

// import { Box, Button, Text } from "../../../components";

// import Card, { CardType } from "./Card";
// import AddCard from "./AddCard";
// import { CARD_HEIGHT } from "./CardLayout";

// interface CheckoutProps {
//   minHeight: number;
// }

// const cards = [
//   {
//     id: 0,
//     type: CardType.VISA,
//     last4Digits: 5467,
//     expiration: "05/24",
//   },
//   {
//     id: 1,
//     type: CardType.MASTERCARD,
//     last4Digits: 2620,
//     expiration: "05/24",
//   },
// ];

// interface LineItemProps {
//   label: string;
//   value: number;
// }

// const LineItem = ({ label, value }: LineItemProps) => {
//   return (
//     <Box flexDirection="row" paddingVertical="s">
//       <Box flex={1}>
//         <Text color="background" variant="title3">
//           {label}
//         </Text>
//       </Box>
//       <Box>
//         <Text color="primary" variant="title3">
//           ${value}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// const Checkout = ({ minHeight }: CheckoutProps) => {
//   const [selectedCard, setSelectedCard] = useState(cards[0].id);
//   return (
//     <Box flex={1} backgroundColor="secondary" style={{ paddingTop: minHeight }}>
//       <Box flex={1} padding="m">
//         <Box height={CARD_HEIGHT}>
//           <ScrollView horizontal>
//             <AddCard />
//             {cards.map((card) => (
//               <Card
//                 key={card.id}
//                 card={card}
//                 selected={selectedCard === card.id}
//                 onSelect={() => setSelectedCard(card.id)}
//               />
//             ))}
//           </ScrollView>
//         </Box>
//         <Box marginTop="xl">
//           <Text color="background" variant="title3">
//             Delivery address
//           </Text>
//           <Box flexDirection="row" opacity={0.5} paddingVertical="m">
//             <Box flex={1}>
//               <Text color="background">
//                 Unit 15, York Farm Business Centre,
//               </Text>
//               <Text color="background">Watling St, Towcester</Text>
//             </Box>
//             <Box justifyContent="center" alignItems="center">
//               <Text color="background">Change</Text>
//             </Box>
//           </Box>
//           <LineItem label="Total Items (6)" value={189.94} />
//           <LineItem label="Standard Delivery" value={12} />
//           <LineItem label="Total Payment" value={201.84} />
//         </Box>
//         <Box
//           paddingVertical="l"
//           alignItems="center"
//           flex={1}
//           justifyContent="flex-end"
//         >
//           <Button
//             label="Swipe to Pay $201.84"
//             variant="primary"
//             onPress={() => true}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Checkout;