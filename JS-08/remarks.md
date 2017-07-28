28.07 Пожелания/Замечания:
1) Объеденить в 1 setState, а то компонента 2 раза обновляется: 
``` 
this.setState({users: users}); 
this.setState({countId: ++this.state.countId});
```
2) `key={user.username}` - для этого лучше использовать id
3) `shouldComponentUpdate` - пиши в лс) ->

-> Oleksandr Kovalov [9:28 AM] 
в общем правильно сделал, что не нашел) Я бы вставил на изменение длинны юзер эррея