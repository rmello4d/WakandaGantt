
About WakandaGantt

<img src="https://rbicchierai.files.wordpress.com/2014/04/image_thumb6.png?w=596" alt="Twproject jQuery Gantt" border="0" />

<img src="https://raw.githubusercontent.com/rmello4d/WakandaGantt/master/WakandaGantt.png" alt="WakandaGantt" border="0" />


## Custom Widget for [Wakanda](http://wakanda.org)
The __WakandaGantt__ widget is an example of how to record, save and play audio files in wakanda 

### Properties
This widget __WakandaGantt__ has the following properties: 

* __value__: The data binding value of the widget

### Goals
The __WakandaGantt__ is an example of how to use HTML5 to record audio files in Wakanda. 

This is a simple example that include also a graphical representation of the sound while recording.  


### Events (widget.js)

```
    Event.create('play');
    Event.create('stopPlaying');
    Event.create('record');
    Event.create('stopRecording');
    Event.create('capture');
    Event.create('stopCapture');


```

### Wakanda Studio

Model
```
1. Create a datasource  D
2. Add attribute string S1
3. Add atribute string  S2
4. save your model. 

```

Wakanda Widgets (optional)
```
1. Drag a wakanda grid to your page and add the datasource D on it 

```


Custom Widget
```
1. Drag the widget to your Wakanda page. 
2. A black box should be available with a few buttons 
3. Drop the second datasource string attribute S2 inside the widget or change the 
       property's panel Datasource value (this will store the music)
4. save your page
5. run your page 
6. Add a record to your grid 
7. Select the grid record recently created
8. click record and save or play your file after
```


### CSS
The __WakandaGantt__ CSS will define the background color of the widget.  
You can adjust its color by changing directly in the Studio OR by changing the /css/widget.css file.  


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.


The WakandaGantt is based on thejQuery Gantt editor has been written by Roberto Bicchierai and Silvia Chelazzi

If you want to know more about the JQuery Gantt :

Try the online working demo here: http://gantt.twproject.com

Documentation is here: http://roberto.open-lab.com/2012/08/24/jquery-gantt-editor/

jQuery Gantt editor is part of <a href="http://www.twproject.com">Twproject 5</a> project



