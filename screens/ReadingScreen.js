import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class ReadScreen extends React.Component {
    constructor(){
        super();        
    }

    render(){
        return(
    
       <View backgroundColor = 'black'>
           <View>
             <Text style = {styles.title}>Read the best stories</Text>
                </View>

                <View >
                <Text style = {styles.storytitle}>1.  The Lion and the Mouse</Text>
                

               <Text style = {styles.story}>
               One day, king Akbar asked a question in his court that left everyone in the courtroom puzzled.
                As they all tried to figure out the answer, Birbal walked in and asked what the matter was. They repeated the question to him.
                The question was, “How many crows are there in the city?”Birbal immediately smiled and went up to Akbar. He announced the answer;
                 he said there were twenty-one thousand, five hundred and twenty-three crows in the city. When asked how he knew the answer, Birbal replied, “Ask your men to count the number of crows. If there are more, then the relatives of the crows must be visiting them from nearby cities. If there are fewer, then the crows from our city must be visiting their relatives who live outside the city.”
                 Pleased with the answer, Akbar presented Birbal with a ruby and pearl chain.
                        </Text>

                        
                    </View>
                </View>
           
        )
    }    
}

const styles = StyleSheet.create({
    title : {
        margin:20,
        color:'white',
        fontSize:30,
        marginTop:60
    },
    storytitle : {
        margin:20,
        fontSize:20,
        color:'white',
    },
    story:{
        marginLeft:30,
        marginRight:10,
        fontSize:16,
        color:'white',
        marginTop:10,       
    },
    SUBstory:{
        marginLeft:30,
        marginRight:10,
        fontSize:14,
        color:'green',
        marginTop:10,   
        marginBottom:70    
    }
})
