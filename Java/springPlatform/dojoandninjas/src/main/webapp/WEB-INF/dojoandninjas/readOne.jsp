<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Read One</title>
</head>
<body>
<div class="jumbotron m-5" align="center">
    <h1><c:out value="${dojo.name}"/> Location Ninjas</h1>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${dojo.ninjas}" var="ninja">
                <tr>
                    <th><c:out value="${ninja.firstName}"/></th>
                    <th><c:out value="${ninja.lastName}"/></th>
                    <th><c:out value="${ninja.age}"/></th>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</div>


</body>
</html>