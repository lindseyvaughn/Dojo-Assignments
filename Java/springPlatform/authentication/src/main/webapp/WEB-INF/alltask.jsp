<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %> 
<%@ taglib prefix = "fmt" uri = "http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Read All Tasks</title>
</head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">s
<body>
<div class="container">
		<a class="btn btn-outline-dark mt-5" href="/logout">Logout</a>
		
		<h1 class="display-4 text-warning text-center mb-4">Welcome, <c:out value="${user.first_name}"/>!</h1>
		
		<div class="inStateEvents">
		<p class="lead">Tasks:</p>
			<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col" class="lead">Task</th>
							<th scope="col" class="lead">Creator</th>
							<th scope="col" class="lead">Assignee</th>
							<th scope="col" class="lead">Priority</th>
						</tr>
					</thead>
	
					<tbody>
						<c:forEach items="${eventsInState}" var="event">
							<tr>
								<td class="lead"><a href="/events/${event.id}"><c:out value="${event.name}"/></a></td>
								<td class="lead"><c:out value="${event.host.first_name}"/></td>
								<td class="lead"><c:out value="${event.date}"/></td>
								<td>
						      		<c:choose>
						      			<c:when test="${event.host.id==user.id }">
						      				<a class="btn btn-outline-primary" href="/event/${event.id}/edit">Edit</a>  
						      				<a class="btn btn-outline-danger" href="/event/${event.id}/delete">Delete</a>
						      			</c:when>
						      			<c:otherwise>
						      				<c:choose>
						      					<c:when test="${event.attendees.contains(user) }">
				
						      						<span class="text-warning lead">Joined!<a class="btn btn-outline-danger ml-2" href="/event/${event.id}/cancel">Cancel</a></span>
						      					</c:when>
						      					<c:otherwise>
						      						<a class="btn btn-outline-success" href="/event/${event.id}/join">Join</a>
						      					</c:otherwise>
						      				</c:choose>
						      			</c:otherwise>
						      		</c:choose>
				 	 			</td>
							</tr>
						</c:forEach>
					</tbody>
				
				</table>
				<a class="btn btn-outline-danger mt-3" href="/events">Create Task</a>
			</div>

	
</body>
</html>