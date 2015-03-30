<html>
	<head>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
	</head>
	<body>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2>Open PRT</h2>
					<p>The Internet of Transportation</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<a href="about">About</a>
					<a href="news">News</a>
					<a href="simulation">Simulation</a>
				</div>
				<div class="col-md-9">
          <?php include('pages/'.$_GET['page']); ?>
				</div>
			</div>
		</div>
	</body>
</html>
