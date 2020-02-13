- Now that the menu is working we need to create the action to delete a certain row. Make a new action called `deleteMake`. It will take accept one argument that represents the index we want to delete. We've deleted rows from tables before so look back at previous homework assignments to write an appropriate action and reducer that handles this use case. Remember to also add your new action to the `mapDispatchToProps` function in your container.

- You will probably need to use local state to pass the index you want to delete to your menu. This is another challenge we'd like to you try out on your own before asking for help.

- Once all the above is done, create a simple `<h2>` that displays `COUNT: <NUM>` where NUM is `props.makes.length`. We want to always know how many rows we have.

- Finally, add a "Import" button to the navigation bar so that we don't have to type "/import" in the browser bar each time.

## Examples

![1](./images/411_wk6_1-1.png)
![2](./images/411_wk6_1-2.png)
![3](./images/411_wk6_1-3.png)
