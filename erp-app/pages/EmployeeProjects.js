import React from 'react'
import { Button, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import { Block } from 'galio-framework';

export default class EmployeeProjects extends React.Component {

     constructor(props) {
       super(props);
       this.state = {
         tableHead: ['Employee', 'Project', 'Team', 'Role'],
         kpiHead: ['Employee', 'KPI', 'Current', 'New', 'Evaluation'],
         tableData: [
           ['Maher', 'project 1', 'team 1', 'Role 1'],
           ['Mostafa', 'project 2', 'team 14', 'Role 2'],
           ['Mohammad', 'project 3', 'team 12', 'Role 1']
         ],
         kpiData: [
          ['Maher', 'Team-Work', '1', '1', '1'],
          ['Mohammad', 'Efficiency', '2', '14', '2'],
          ['Mostafa', 'github', '3', '12', '1']
        ]
       }
     }
     render() {
        return (
           <View style={styles.container}>
             <Text>Employee Projects</Text>
             <Text>An overview of projects and their assigned team members</Text>
             <Block style={styles.table}>
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.state.tableData} textStyle={styles.text}/>
        </Table>
      </Block>
      <Text>Overall Kpis</Text>
             <Text>An overview of staff performance</Text>
             <Block style={styles.table}>
       <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={this.state.kpiHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.state.kpiData} textStyle={styles.text}/>
        </Table>
      </Block>
             {/* <Button style={styles.button} title="Back Home" onPress={() => navigation.navigate("All Employees")} />
             <Button style={styles.button} title="Back" onPress={() => navigation.goBack()} /> */}
          </View>
        );
      }}
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
          justifyContent: 'center',
        },
     //    container: { flex: 1, width: 300, paddingTop: 3, backgroundColor: '#fff' },
        table: { flex: 1, width: 330, paddingTop: 3, backgroundColor: '#fff' },
        head: {  height: 50,  backgroundColor: '#f1f8ff'  },
        wrapper: { flexDirection: 'row' },
        title: { flex: 1, backgroundColor: '#f6f8fa' },
        row: {  height: 28  },
        text: { textAlign: 'center' },
      });

