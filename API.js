import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, Dimensions, Touchable } from "react-native";

export default function FetchAPI({ navigation }) {
    function goInfo(key) {

        navigation.navigate("Contact",{paramKey:key});
      }
    const url = "http://192.168.43.61:3000/classroom";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const renderItem = ({ item }) => (
        <View key={item.id} style={styles.item}>
            <Text style={styles.title} onPress={()=>{goInfo(item.id)}}>{item.name}</Text>
            <Text style={styles.prices}>{item.leader}</Text>
        </View>
    );
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(()=>setLoading(false));
    })
    
    
    return (
        <View>
        {
            isLoading ? <Text>loading...</Text>:( 
                <FlatList
                    style={styles.list}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )
        }
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightgray',
        height:100,
        width:500,
        marginTop:10,
    },
    title: {
        fontSize: 30,
    },
    prices: {
        fontSize: 20,
    },
    listTab: {
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnSortTab: {
        width: Dimensions.get('window').width / 2.25,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    btnTab: {
        width: Dimensions.get('window').width / 4.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    btnTabActive: {
        backgroundColor: '#E6838D'
    },
    list: {
        height: Dimensions.get('window').height / 1.4,
    }
});