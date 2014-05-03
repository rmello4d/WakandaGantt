
About WakandaGantt


## Custom Widget for [Wakanda](http://wakanda.org)
The __WakandaGantt__  makes your gantt projects easy to create and manage. A full feature gantt and tasks editor, this widget is based on the jQuery Gantt editor -written by Roberto Bicchierai and Silvia Chelazzi (https://github.com/robicch/jQueryGantt). 

Fully compatible with Wakanda >8, the __WakandaGantt__ adds all the dependencies needed to have a draggable and bindable widget directly in Wakanda. 

Here some screenshots:

Original product


<img src="https://rbicchierai.files.wordpress.com/2014/04/image_thumb6.png?w=596" alt="Twproject jQuery Gantt" border="0" />

Drag and drop to the Wakanda Studio


<img src="https://raw.githubusercontent.com/rmello4d/WakandaGantt/master/WakandaGantt.png" alt="WakandaGantt" border="0" />


Property panel at the Wakanda Studio


<img src="https://raw.githubusercontent.com/rmello4d/WakandaGantt/master/properties.png" alt="WakandaGantt" border="0" />



### Properties
This widget __WakandaGantt__ has the following properties: 

* __gantDataClass__: The dataclass used for the data
* __projectAttribute__: The string attribute from the __gantDataClass__  used to store the data


### Events (widget.js)

```
    saveProject

```

### Wakanda Studio

Model
```
You need an attribute string to save the data. 
The widget comes with a save button that will save the data to your wakanda database. 

```

### CSS
The __WakandaGantt__ CSS is very simple, the widget basically uses the CSS already provided from the original project (more information down below)

### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.


The WakandaGantt is based on thejQuery Gantt editor has been written by Roberto Bicchierai and Silvia Chelazzi

If you want to know more about the JQuery Gantt :

Try the online working demo here: http://gantt.twproject.com

Documentation is here: http://roberto.open-lab.com/2012/08/24/jquery-gantt-editor/

jQuery Gantt editor is part of <a href="http://www.twproject.com">Twproject 5</a> project



