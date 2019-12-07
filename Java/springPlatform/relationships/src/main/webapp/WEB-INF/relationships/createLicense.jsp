<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Create License</title>
</head>
<body>
<div class="container">
		<a  href="/">HOME</a>
		
		<h1>New License</h1>
		
		<form:form action="/license/process" method="post" modelAttribute="license">
			<p>
				<form:label path="person">Person: </form:label>
				<form:errors path="person" />
				<form:select path="person">
					<c:forEach items="${persons}" var="person">
						<form:option value="${person.id}">
							<c:out value="${person.firstName}"/> <c:out value="${person.lastName}"/>
						</form:option>
					</c:forEach>
				</form:select>
			</p>
			
			<p>
				<form:label path="state">State: </form:label>
				<form:errors path="state" />
				<form:input path="state" />
			</p>
			
			<p>
				<form:label path="expirationDate">Expiration Date:</form:label>
				<form:errors path="expirationDate" />
				<form:input type="date" path="expirationDate" />
			</p>
			
			<input type="submit" value="CREATE" />
		</form:form>
		
	</div>



</body>
</html>