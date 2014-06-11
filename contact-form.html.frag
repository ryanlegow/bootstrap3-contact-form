<div class="container">
  <div id="contact_form" class="row">
    <div class="col-12 col-sm-12 col-lg-12">
      <h2>Tell Us What You Think...</h2>
      <p>We appreciate any feedback about your overall experience on our site or how to make it even better.  Please fill in the form below with any comments and we will get back to you.</p>
      <form role="form" id="feedbackForm">
        <div class="form-group has-feedback">
          <label class="control-label" for="name">Name</label>
          <input type="text" class="form-control" id="name" name="name">
          <span class="glyphicon glyphicon-asterisk form-control-feedback"></span>
          <span class="help-block" style="display: none;">Please enter your name.</span>
        </div>
        <div class="form-group">
          <label class="control-label" for="title">Title</label>
          <input type="text" class="form-control optional" id="title" name="title">
        </div>
        <div class="form-group">
          <label class="control-label" for="company">Company</label>
          <input type="text" class="form-control optional" id="company" name="company">
        </div>
        <div class="form-group">
          <label class="control-label" for="website">Website</label>
          <input type="url" class="form-control optional" id="website" name="website">
        </div>
        <div class="form-group has-feedback">
          <label class="control-label" for="phone">Phone</label>
          <input type="tel" class="form-control" id="phone" name="phone" placeholder="XXX-XXX-XXXX">
          <span class="glyphicon glyphicon-asterisk form-control-feedback"></span>
          <span class="help-block" style="display: none;">Please enter a valid phone number.  Must be ten digits long.</span>
        </div>
        <div class="form-group has-feedback">
          <label class="control-label" for="email">Email Address</label>
          <input type="email" class="form-control" id="email" name="email">
          <span class="glyphicon glyphicon-asterisk form-control-feedback"></span>
          <span class="help-block" style="display: none;">Please enter a valid e-mail address.</span>
        </div>
        <div class="form-group has-feedback">
          <label class="control-label" for="message">Message*</label>
          <textarea rows="10" cols="100" class="form-control" id="message" name="message"></textarea>
          <span class="help-block" style="display: none;">Please enter a message.</span>
        </div>
        <img id="captcha" src="library/vender/securimage/securimage_show.php" alt="CAPTCHA Image" />
        <a href="#" onclick="document.getElementById('captcha').src = 'library/vender/securimage/securimage_show.php?' + Math.random(); return false" class="btn btn-info btn-sm">Show a Different Image</a><br/>
        <div class="form-group has-feedback" style="margin-top: 10px;">
          <label class="control-label" for="captcha_code">Text within Image</label>
          <input type="text" class="form-control" name="captcha_code" id="captcha_code" placeholder="For security, please enter the code displayed in the box." />
          <span class="glyphicon glyphicon-asterisk form-control-feedback"></span>
          <span class="help-block" style="display: none;">Please enter the code displayed within the image.</span>
        </div>
        <span class="help-block" style="display: none;">Please enter a the security code.</span>
        <button type="submit" id="feedbackSubmit" class="btn btn-primary btn-lg" data-loading-text="Sending..." style="display: block; margin-top: 10px;">Send Feedback</button>
      </form>
      <h3>* Indicates a required field.</h3>
    </div><!--/span-->
  </div><!--/row-->
  <hr>
</div><!--/.container-->