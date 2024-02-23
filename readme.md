
//Register 

  - hash password Hash::make($request -> password)
  - save request to database  
    User::create($request->all())

//Login

  - find email 
      User::where ('email' , $request->email)->first();
  - compare password from request to hash password in database 
      Hash::check($request->password,  $user->password)


   

  