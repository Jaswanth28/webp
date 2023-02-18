<html>
    <body>
    <%! 
        long n,res;
        String str;
        long f(long n){
            if(n==0)
            return 1;
            else
            return n*f(n-1);
        }
        %>
        <% str = request.getParameter("v");
        n=Long.parseLong(str);
        res=f(n);
        %>
        <b>factorial value :</b><%=res%>
    </body>
</html>