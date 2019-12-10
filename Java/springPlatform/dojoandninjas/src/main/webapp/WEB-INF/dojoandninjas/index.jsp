<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index/create Dojo</title>
</head>
<body>
<div class="container">
		<h1>New Dojo</h1>
		
		<form:form action="/dojo/process" method="post" modelAttribute="dojo">
			<p>
				<form:label path="Name">Name: </form:label>
				<form:errors path="Name" />
				<form:input path="Name" />
			</p>
			<input class="btn btn-success mt-2" type="submit" value="CREATE" />
		</form:form>
		
	</div>

</body>
</html>