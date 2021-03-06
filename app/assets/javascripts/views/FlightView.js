var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: 'tr',

  render: function(){
    // Render each of the flights and insert it into the table
    var origin = this.model.get("origin");
    var $origin = $("<td>").text( origin );
    this.$el.append( $origin );

    var destination = this.model.get("destination");
    var $destination = $("<td>").text( destination );
    this.$el.append($destination);

    var flight_num = this.model.get("flight_num");
    var $a = $("<a>").text(flight_num);
    $a.attr("id", "selectedFlight");
    $a.attr("src", "#");
    var $flight_num = $("<td>").html($a);
    this.$el.append($flight_num);

    var date = moment( this.model.get("departure_date") ).format('Do MMM YYYY');

    var $date = $("<td>").text(date);
    this.$el.append($date);
    this.$el.prependTo("#showFlight");
  },

  events: {
    'click #selectedFlight': 'selectSeatPage'
  },

  //navigate to another route when flight is clicked
  selectSeatPage: function(){
    app.router.navigate("/flights/" + this.model.get('id'), true);
  },

});

var createFlightView = function(flights) {
  $("#showFlight").html("");
  _.each(flights, function(flight){
    var fv = new app.FlightView({
      model:flight
    });
    fv.render();
  });
};



// You should see this comment
