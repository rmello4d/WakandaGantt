WAF.define('WakandaGantt', ['waf-core/widget'], function(widget) {

    var WakandaGantt = widget.create('WakandaGantt', {
               
		ganttDataclass : widget.property({
		            type: 'datasource',
		            attributes: [{
		                name: 'project'
		            }]
		}),
		roles: widget.property({
			type: 'list',
			attributes: ['id', 'name']
		}),	
		resources: widget.property({
			type: 'list',
			attributes: ['id', 'name']
		}),		
		
		
		//******************************************************************  
		// init
		//******************************************************************  
        init: function() {
        	
        	//creating the node and starting the 3rd party library
        	$(this.node).html('<div class="wakgantt"></div>');    
        	
        	//starting the gantt editor        
        	this.ge = new GanttMaster();
        	this.ge.init($('.wakgantt', this.node));
        	
        	//making a copy of this
            var self = this;
  
  			//save button
			$('.wak-gantt-save', this.node).click( function () {			
				this.ganttDataclass().getElement(this._ID, {
					onSuccess: function(dsEvent) {
						self.updateDB(dsEvent.dataSource._private.currentEntity);						
					}
				});				
		 	}.bind(this));	
			
			//critical path button
			$('.wak-gantt-critical-path', this.node).click( function () {
			 	this.ge.gantt.showCriticalPath=!this.ge.gantt.showCriticalPath; this.ge.redraw();
			 	alert ('coucou');
			});		
			
			// if a dataclass is assigned, get values and render()
			if (this.ganttDataclass()) {
				this.projectDataAttribute = this.ganttDataclass.attributeFor(this.ganttDataclass.attributes()[0].name);
				self.ganttDataclass().subscribe('currentElementChange', function(e) {
					this.render(e.data.dataSource.getCurrentElement());
				}.bind(this));
			}
			
			//initial render()
			this.render();	 
		 
        }, 
   
   
   		//******************************************************************
   		render : function(currentElement) {
   			
   			var projectData;
   			
   			//loading international messages
   			this.loadI18n();
						
			//assigning projectData			
   			if (currentElement && currentElement[this.projectDataAttribute].value){
   				projectData = currentElement[this.projectDataAttribute].value;
   				this._ID = currentElement.ID.value;
   			} else {
   				//creating an empty project
   				projectData ='{"tasks":[],"selectedRow":0,"canWrite":true,"canWriteOnParent":true}';
   			}
   			
   			//loading project data
   			this.ge.loadProject(JSON.parse(projectData));
            this.ge.checkpoint();

            //fill default Teamwork roles if any
            if (!this.ge.roles || this.ge.roles.length == 0) {
                this.setRoles();
            }

            //fill default Resources roles if any
            if (!this.ge.resources || this.ge.resources.length == 0) {
                this.setResource();
            }      
   			
   		},
       
        //******************************************************************
        //updating the data if user clicks save
      	updateDB: function(currentEntity) {					
			currentEntity[this.projectDataAttribute].setValue(JSON.stringify(this.ge.saveProject()));
			var self = this;
			currentEntity.save({
				onSuccess: function() {
					console.log("Saved successfully done!");
					self.fire('saveProject', {status: "saved"});
				},
				onError: function() {
					console.log("Problems with saving the gantt data");
					self.fire('saveProject', {status: "NOT saved"});
				}
			});	
		},
    	
    	//******************************************************************  
        setRoles: function() {
        	var roles = this.roles();
			this.ge.roles = [];
			
			for (i = 0, l = roles.length; i < l; i++) {
				this.ge.roles.push({id:roles[i].id, name:roles[i].name})
			}	
		}, 

    	//******************************************************************  
        setResource: function() {
        	var resources = this.resources();
			this.ge.resources = [];
			
			for (i = 0, l = resources.length; i < l; i++) {
				this.ge.resources.push({id:resources[i].id, name:resources[i].name})
			}	
		}, 

    	//******************************************************************           
       	createTask: function (id, name, code, level, start, duration) { //  creates a Task object. The task created is not added to project, just created
       		return this.ge.createTask(id, name, code, level, start, duration);
        },    
       	addTask: function (task, row) { //adds a task to the project at the specified row
       		this.ge.addTask(task, row);
       	},
       	getTask: function (taskId) { //retrieves a task by id
       		return this.ge.getTask(taskId);
       	},
       	changeTaskDates: function (task, start, end) { // changes scheduling for a task in the project
       		this.ge.changeTaskDates(task, start, end);
       	},
       	moveTask: function (task,newStart) { //  moves a task to a new starting date
       		this.ge.moveTask (task,newStart);
       	},       	
       	taskIsChanged: function () { // notifies GanttMaster that a task has been changed and enqueues a request for redrawing both sides. Redraw is executed asynchronously and only once after 50 milliseconds
       		this.ge.taskIsChanged();
       	},  
       	redraw: function () { //redraw both sides. Redraw is executed immediately
       		this.ge.redraw();
       	},  
       	reset: function () { // starts a new project and empties both sides
       		this.ge.reset();
       	}, 
       	showTaskEditor: function (taskId) { //shows the complete task editor in popup
       		this.ge.showTaskEditor(taskId);
       	}, 
       	undo: function () { //undoes the last operation performed. There is no limit to the number of operations (the limit is just the memory of your browser)
       		this.ge.undo();
       	}, 
       	redo: function () { //redoes last operation undo-ed
       		this.ge.redo();
       	}, 

       
    	//******************************************************************         
        loadI18n: function() {
		  GanttMaster.messages = {
		    "CANNOT_WRITE":                  "CANNOT_WRITE",
		    "CHANGE_OUT_OF_SCOPE":"NO_RIGHTS_FOR_UPDATE_PARENTS_OUT_OF_EDITOR_SCOPE",
		    "START_IS_MILESTONE":"START_IS_MILESTONE",
		    "END_IS_MILESTONE":"END_IS_MILESTONE",
		    "TASK_HAS_CONSTRAINTS":"TASK_HAS_CONSTRAINTS",
		    "GANTT_ERROR_DEPENDS_ON_OPEN_TASK":"GANTT_ERROR_DEPENDS_ON_OPEN_TASK",
		    "GANTT_ERROR_DESCENDANT_OF_CLOSED_TASK":"GANTT_ERROR_DESCENDANT_OF_CLOSED_TASK",
		    "TASK_HAS_EXTERNAL_DEPS":"TASK_HAS_EXTERNAL_DEPS",
		    "GANTT_ERROR_LOADING_DATA_TASK_REMOVED":"GANTT_ERROR_LOADING_DATA_TASK_REMOVED",
		    "ERROR_SETTING_DATES":"ERROR_SETTING_DATES",
		    "CIRCULAR_REFERENCE":"CIRCULAR_REFERENCE",
		    "CANNOT_DEPENDS_ON_ANCESTORS":"CANNOT_DEPENDS_ON_ANCESTORS",
		    "CANNOT_DEPENDS_ON_DESCENDANTS":"CANNOT_DEPENDS_ON_DESCENDANTS",
		    "INVALID_DATE_FORMAT":"INVALID_DATE_FORMAT",
		    "TASK_MOVE_INCONSISTENT_LEVEL":"TASK_MOVE_INCONSISTENT_LEVEL",

		    "GANTT_QUARTER_SHORT":"trim.",
		    "GANTT_SEMESTER_SHORT":"sem."
		  };
		}
    });

    return WakandaGantt;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html */

		  