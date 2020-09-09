import React from 'react';
import './search.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const style = (theme) => ({
    root: {
        marginTop: theme.spacing.unit * 0.5,
        backgroundColor:"rgb(93,175,240,0.2)",
        height: "30vw",
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2px 2px 2px 2px',
    },
    table: {
        backgroundColor:"rgb(93,175,240,0.2)",
    },
    cells: {
        color : 'rgb(93,175,240,0.2)',
        fontSize: '0.4vw',
        flex:1,
    },
    hr: {
        color:'white',
        fontSize:'0.5em',
        
    },
    title2: {
        fontSize: ".4rem",
        color:"white",
        paddingTop: '2px'},
});
const rows = [
    { id: 'customer_name', numeric: true, disablePadding: false, label: 'Customer Name' },
    { id: 'customer_number', numeric: true, disablePadding: false, label: 'Customer Number' },
    { id: 'total_open_amount', numeric: true, disablePadding: false, label: 'Open Amount'},
];

class Search extends React.Component {
    state = {
        query: "",
        data: [],
        filteredData: [],
    };

    handleInputChange = event => {
        const query = event.target.value;
        
        var filteredData
        this.setState(prevState => {
        filteredData = prevState.data.filter(element => {
            return element.customer_name?element.customer_name.includes(query):null;
            });
            if(filteredData.length==0){
            filteredData = prevState.data.filter(element => {
                return (element.customer_number.toString(10).includes(query)?element.customer_name:null);
            });}
            const result = [];
            const map = new Map();
            for (const item of filteredData) {
                if(!map.has(item.customer_name)) {
                    map.set(item.customer_name, true);   
                    result.push({
                        customer_name: item.customer_name,
                        customer_number: item.customer_number,
                        total_open_amount: item.total_open_amount
                });
            }
        }
        filteredData=result;
        return {
            query,
            filteredData
        };
        });
    };

    getData = () => {
        fetch('http://localhost:8081/1704681/datafetch.do')
        .then(response => response.json())
        .then(data => {
            const { query } = this.state;
            var filteredData;
            filteredData = data.filter(element => {
                return element.customer_name?element.customer_name.includes(query):null;
            });
            console.log(filteredData.length)
            if(filteredData==0){
                filteredData = data.filter(element => {
                    return (element.customer_number.toString(10).includes(query)?element.customer_name:null);
                });
            }const result = [];
        const map = new Map();
        for (const item of filteredData) {
            if(!map.has(item.customer_name)){
                map.set(item.customer_name, true);  
                result.push({
                    customer_name: item.customer_name,
                    customer_number: item.customer_number,
                    total_open_amount:item.total_open_amount
                });
            }
        }
        filteredData=result;
            this.setState({
            data,
            filteredData
            });
        });
    };
    componentWillMount() {
        this.getData();
    }

    render()
    {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} style={{backgroundColor: "rgba(27,31,56,.9)"}}>
                <div className="Search">
                    <div class="grid_count">
                        <div class="wrap">
                            <input 
                                type="text" 
                                class="input" 
                                placeholder="TWEET"   
                                value={this.state.query} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    
                </div>
                
                   
                
                    
                </Paper>
            </div>
        );
    }
}
export default withStyles(style)(Search);