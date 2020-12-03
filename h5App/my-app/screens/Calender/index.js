import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

import img from '../../assets/favicon.png';

export default class App extends Component  {
constructor(props) {
    super(props);
    this.state = {
        selectedStartDate: null,
        selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
}

onDateChange(date, type) {
    if (type === 'END_DATE') {
        this.setState({
            selectedEndDate: date,
        });
    } else {
        this.setState({
            selectedStartDate: date,
            selectedEndDate: null,
        });
    }
}

    render() {
        const { navigate } = this.props.navigation;
        const { selectedStartDate, selectedEndDate } = this.state;
        const minDate = new Date(); // Today
        const maxDate = new Date(2030, 6, 3);
        const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
        const endDate = selectedEndDate ? selectedEndDate.toString() : '';
        
        return (
            <View style={styles.calender}>
                <Image source={img}/>
                <CalendarPicker
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minRangeDuration={4}
                    maxRangeDuration={11}
                    minDate={minDate}
                    maxDate={maxDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor="#7300e6"
                    selectedDayTextColor="#FFFFFF"
                    onDateChange={this.onDateChange}
                />

            <View>
                <Text>SELECTED START DATE:{ startDate }</Text>
                <Text>SELECTED END DATE:{ endDate }</Text>
            </View>
                <Button
                    title="Book n"
                    onPress={() => this.props.navigation.navigate('Info')}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    calender: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
});