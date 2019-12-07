<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	
	
	<title>Read one Person's Info</title>
</head>
<body>
	<div class="container">
		<a  href="/">HOME</a>
		
		<h1><c:out value="${person.firstName}"/> <c:out value="${person.lastName}"/></h1>
		
		<p>License Number: <c:out value="${person.license.number}"/></p>
		
		<p>State: <c:out value="${person.license.state}"/></p>
		
		<p>Expiration Date <c:out value="${person.license.expirationDate}"/></p>
	
		<form action="/persons/${person.id}" method="post">
		    <input type="hidden" name="_method" value="delete">
		    <input class="btn btn-danger" type="submit" value="DELETE">
		</form>
</div>
</body>
</html>