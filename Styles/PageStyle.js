import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    PageHeader: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    h1: {
        fontSize: 32
    },
    container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
        flex: 1,
    },
    circle:{
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: "red",
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
});