import React, {useState} from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native-gesture-handler';
import { Box, DrawerHeader, DrawerContent} from "../../components";
import TextInput from "../../components/TextInput";
import { MaterialIcons, FontAwesome5  } from '@expo/vector-icons';
import { useFormik } from "formik";
import * as Yup from "yup";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425 / 294);
const borderRadius = 24;
const PADDING = 16;
const snapPoints = [-wWidth, 0, wWidth];
const SEARCH_FULL_WIDTH = width - PADDING * 2; //search_width when unfocused
const SEARCH_SHRINK_WIDTH = width - PADDING - 90; //search_width when focused

const PriceSchema = Yup.object().shape({
  price: Yup.string()
    .min(5, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

const initialElements = [
  {id: '0', 
  price: "1.34567",
  username: "Venky",
  rank: "1"},
  {id: '1', 
  price: "1.34500",
  username: "Venky",
  rank: "2"},
  {id: '2', 
  price: "1.34500",
  username: "Venky",
  rank: "3"}
]

const ContestJoiningCard = () => {
  const [price, setPriceState] = useState('');
  const addPrice = ()=>{
    if(price == "")return

    initialElements.push({id: (initialElements.length + 1).toString(), price, username, rank})
    setPriceState('')
  }

  const {
    handleSubmit,
    errors,
    touched,
    values,
    setFieldValue,
  } = useFormik({
      validationSchema: PriceSchema,
      initialValues: { price: "" },
      onSubmit: () => addPrice()
    });
  
const logInput = (input)=>{
  setPriceState(input)
  }
  const renderTip = ({ item }) => {
    return(
    <TouchableOpacity style={styles.listItem}>
      <View style={[styles.row]}>
        <View style={styles.left}>
        <Text style={[styles.id]}>{parseInt(item.id) + 1}</Text>
        <Text style={styles.label}>{`${item.username}`}</Text>
        <Text style={styles.price}>{`${item.price}`}</Text>
        </View>
        
        <Text style={styles.rank}>{`${item.rank}`}</Text>
      </View> 
    </TouchableOpacity>)
    }

  return (
    <DrawerContent>
      <View style={styles.cartCard}>
        <View style={{flexDirection:"row", flex:1, flexWrap: 'wrap' }}>
          
        <MaterialIcons name="emoji-events" size={20} color="white" style={{right: 75, top:5}} /> 
        <Text style={{color: "white", textAlign: 'left', right: 75, top:5}}>70%
        </Text>
        <Text style={{color: "white", textAlign: 'center', left: 10, top:5}}>GPBUSD</Text>
        <Text style={{color: "white", textAlign: 'right', left:80, top:5, fontSize: 12}}>upto 3 predict</Text>
        </View>
        <View style={{flexDirection:"row", bottom: 50, flexWrap: 'wrap'}}>
        <FontAwesome5 name="money-bill-wave" size={15} color="white" style={{right: 90, top:5}} /> 
        <Text style={{color: "white", textAlign: 'left', right: 90, top:5}}> Pool
        </Text>
        <Text style={{color: "white", textAlign: 'center', right: 10, top:5}}>Members</Text>
        <Text style={{color: "white", textAlign: 'right', left:80, top:5}}>Entry</Text>
        </View>
        <View style={{flexDirection:"row", flex:1 ,bottom: 40, flexWrap: 'wrap' }}>
        <Text style={{color: "white", textAlign: 'left', right: 110, top:5, fontWeight:"bold"}}> Rs.1,500
        </Text>
        <Text style={{color: "white", textAlign: 'center', right: 12, top:5, fontWeight:"bold"}}>50</Text>
        <Text style={{color: "white", textAlign: 'right', left:100, top:5, fontWeight:"bold"}}>Rs.25</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row',  position: 'absolute', bottom: 35,}}>
        <View
          style={{
            height: 20,
            paddingVertical: 10,
            flex: 1, left:15, right: 30}}>
          <TextInput
            icon="gift"
            placeholder="Enter your Price"
            error={errors.price}
            touched={touched.price}
            autoCapitalize="none"
            returnKeyType="next"
            returnKeyLabel="next"
            onSubmitEditing={() => handleSubmit()}
            style={{ color: "white"}}
            keyboardType="numeric"
            maxLength={8}
          />
        </View>
        <View style={{marginRight: 5, marginHorizontal:25, top: 10}}>
          
          <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.buttonText}>Join</Text>
          {/* <Box marginBottom="m"> */}
          </TouchableOpacity>
          </View>
          </View>
        </View>
        <View style={styles.FlatListCard}>
          <View style={{flexDirection: "row"}}>
          <Text style={{color: "white", textAlign: 'left', right: 80}}>Name</Text>
          <Text style={{color: "white", textAlign: 'center', left: 40}}>Price</Text>
          <Text style={{color: "white", textAlign: 'right', left: 110}}>Rank</Text>
          </View>
              <FlatList
            data={initialElements}
            renderItem={renderTip}
            style={styles.flatList}
            /> 
        </View>
      </DrawerContent>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 180,
    width: wWidth,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#00162B",
    top:32,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  FlatListCard: {
    height: 150,
    elevation: 10,
    width: wWidth,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#00162B",
    marginVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  actionBtn: {
    width: 100,
    height: 48,
    borderRadius: 5,
    backgroundColor: "#FFA500",
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    marginTop:40,
    color:'white',
    fontSize:30,
    backgroundColor: "#2e2a2a",
    height: 50,
    width: '90%',
    textDecorationColor: "white",
    borderColor: 'black',
    borderWidth: 2
},
buttonText: {
  color: "black",
  textAlign: "center",
  fontSize: 20,
  fontWeight:'bold',
  marginVertical: 8
},
row: {
  paddingTop: 15,
  paddingBottom: 15,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderWidth: 0.5,
  borderRadius: 5,
  borderColor: "#d6d7da"
},
left: {
  flexDirection: "row",
  alignItems: "center"
},
label: {
  fontSize: 15,
  flex: 1,
  left: 30,
  fontWeight: "bold",
  paddingRight: 80
},
id: {
  left: 10,
  fontSize: 15,
  fontWeight: "bold",
  marginRight: 5
},
listItem: {
  width: "95%",
  height: 35,
  backgroundColor: "white",
  borderRadius: 5,
  marginVertical: 4,
  marginHorizontal: "3%",
  justifyContent: "center"
},
rank: {
  fontSize: 15,
  fontWeight: "bold",
  position: "absolute",
  right: 20,
  textAlign: 'right',
  paddingLeft: 15
},
price: {
  fontSize: 15,
  fontWeight: "bold",
  position: "absolute",
  textAlign: 'center',
  right: 100,
  paddingLeft: 15
},
flatList:{
  width: "100%"
},
});

// Chetak@5077
export default ContestJoiningCard;