# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event handler is called.
* The event handler dispatches the ADD_ONE action.
* The reducer receives the ADD_ONE action and updates the value according to what was written in the switch statement.
* The reducer updates the state with the new total
...

* TotalDisplay shows the total plus 1.
