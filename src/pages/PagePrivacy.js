import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PagePrivacy = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • Privacy`;
  });

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <h1 className="display-4 text-primary">
            Your privacy is vital to us!
          </h1>
          <table className="table white privacy">
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon="check" className="text-primary" />
                </td>
                <td>
                  We don&#8217;t ask you for any personal information unless we
                  truly need it.
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon="check" className="text-primary" />
                </td>
                <td>
                  We don&#8217;t share your personal information with anyone
                  except to comply with the law, develop our products, or
                  protect our rights.
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon="check" className="text-primary" />
                </td>
                <td>
                  We don&#8217;t store personal information on our servers
                  unless required for the on-going operation of our services.
                </td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon="check" className="text-primary" />
                </td>
                <td>
                  Any personal data we do store on your behalf you have the
                  ability to delete.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            By using the Verite Data Science, LLC website, you are accepting
            this policy. This policy does not apply to the practices of third
            parties that Verite Data Science, LLC does not own or control, or to
            individuals that Verite Data Science, LLC does not employ or manage.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">
            Information Collected by Verite Data Science, LLC
          </h4>
          <p>
            We only collect personal information that is relevant to the purpose
            of our website. This information allows us to provide you with a
            customized and efficient experience. We collect the following types
            of information from our Verite Data Science, LLC users:
          </p>
          <p>Information You Provide to Us:</p>
          <ol>
            <li>
              We receive and store any information you enter on our website or
              provide to us in any other way. You can choose not to provide us
              with certain information, but then you may not be able to take
              advantage of many of our special features.
            </li>
            <li>
              Registration: In order for you to use Verite Data Science, LLC
              services you must complete a registration form. As part of this
              registration form, we require only your email address and
              username.
            </li>
            <li>
              User Profile: To allow you to express yourself beyond just the
              information collected during registration, we enable you to
              provide additional information. As indicated below, in the section
              titled "Sharing Your Information", you can control how your
              information is displayed and used.
            </li>
          </ol>
          <p>Automatic Information:</p>
          <ol>
            <li>
              We receive and store certain types of information whenever you
              interact with us. Verite Data Science, LLC and its authorized
              agents automatically receive and record certain "traffic data" on
              their server logs from your brow top-borderser including your IP
              address, Verite Data Science, LLC cookie information, and the page
              you requested. Verite Data Science, LLC uses this traffic data to
              help diagnose problems with its servers, analyze trends and
              administer the website.
            </li>
            <li>
              Verite Data Science, LLC may collect and, on any page, display the
              total counts that page has been viewed. This includes User Profile
              pages.
            </li>
            <li>
              Many companies offer programs that help you to visit websites
              anonymously. While Verite Data Science, LLC will not be able to
              provide you with a personalized experience if we cannot recognize
              you, we want you to be aware that these programs are available.
            </li>
          </ol>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We collect information to make the Verite Data Science, LLC website
            useful for you such as your registration and user profile data.
            <br />
            <br />
            Our servers also collect log information used to make the website
            faster and better.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">E-mail Communications</h4>
          <p>
            Verite Data Science, LLC is very concerned about your privacy and we
            will never provide your email address to a third party without your
            explicit permission, as detailed in the "Sharing Your Information"
            section below.
          </p>
          <p>
            Verite Data Science, LLC may send out e-mails with Verite Data
            Science, LLC-related news, products, offers, surveys or promotions.
            You may also receive notification e-mails from Verite Data Science,
            LLC, which inform you of actions that have been performed on the
            site.
          </p>
          <p>
            If you do not want to receive e-mail from us, please visit the Email
            Preferences section of your User Profile and/or follow the
            instructions contained in the unwanted e-mail message. However,
            please note that in all cases you will continue to receive all
            system e-mails (e.g. those regarding forgotten user passwords) and
            legal notices (e.g. updates to our policies) from us.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We will send you emails based on your profile settings. From time to
            time, we may send emails to all our users.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Cookies</h4>
          <p>
            Cookies are alphanumeric identifiers that are saved by your Web
            browser to enable our systems to recognize your browser and tell us
            how and when pages in our website are visited and by how many
            people. Verite Data Science, LLC cookies do not collect personal
            information, and we do not combine information collected through
            cookies with other personal information to tell us who you are or
            what your screen name or e-mail address is.
          </p>
          <p>
            The "help" portion of the toolbar on the majority of browsers will
            direct you on how to prevent your browser from accepting new
            cookies, how to command the browser to tell you when you receive a
            new cookie, or how to fully disable cookies. We recommend that you
            leave the cookies activated because cookies allow you to use some of
            Verite Data Science, LLC's coolest features. Some of our business
            partners, like our advertisers, may use cookies on our website. We
            have no access to, or control over, these cookies.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            To remember you, our system will give you a cookie. It's safe.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Sharing Your Information</h4>
          <p>
            Rest assured that we neither rent nor sell your personal information
            to anyone and that we will share your personal information only as
            described below.
          </p>
          <ul>
            <li>
              Verite Data Science, LLC Personnel: Verite Data Science, LLC
              personnel and authorized consultants and/or contractors may have
              access to user information if necessary in the normal course of
              Verite Data Science, LLC business.
            </li>
            <li>
              Business Transfers: In some cases, we may choose to buy or sell
              assets. In these types of transactions, user information is
              typically one of the business assets that is transferred.
              Moreover, if Verite Data Science, LLC, or substantially all of its
              assets, were acquired, user information would be one of the assets
              that is transferred.
            </li>
            <li>
              Protection of Verite Data Science, LLC and Others: We may release
              personal information when we believe in good faith that release is
              necessary to comply with a law; to enforce or apply our Terms of
              Use and other policies; or to protect the rights, property, or
              safety of Verite Data Science, LLC, our employees, our users, or
              others. This includes exchanging information with other companies
              and organizations for fraud protection and credit risk reduction.
            </li>
            <li>
              With Your Consent: Except as noted above, we will contact you when
              your personal information is shared with third parties or used for
              a purpose incompatible with the purpose(s) for which it was
              originally collected, and you will be able to opt out to prevent
              the sharing of this information.
            </li>
          </ul>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We do not sell your information to anyone. We may release other
            information to authorities where required by law.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Keeping Information Secure</h4>
          <ul>
            <li>
              Your Verite Data Science, LLC account information is protected by
              a password for your privacy and security. Protect against
              unauthorized access to your password and to your computer by
              logging off once you have finished using a shared computer.
            </li>
            <li>
              Only employees who need personal information to perform a specific
              job (for example, a customer service representative) are granted
              access to it. All of our employees are kept up to date on our
              privacy and security practices.
            </li>
          </ul>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            Your account is protected by a hashed, encrypted password. We do not
            know what your password is and you must keep it safe.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">
            Control Display and Use of Your Information
          </h4>
          <ul>
            <li>
              As stated previously, you can always opt not to disclose
              information, but then you may be unable to use certain features on
              our website.
            </li>
            <li>
              By visiting your User Profile, you can correct, amend, add or
              delete personal information on our website.
            </li>
            <li>
              If you do not wish to receive e-mail from us please visit the
              Settings of your User Profile and/or follow the instructions
              contained in the unwanted e-mail message.
            </li>
            <li>
              However, please note that you will continue to receive all system
              e-mails (e.g. those regarding forgotten user passwords) and legal
              notices (e.g. updates to our policies) from us.
            </li>
          </ul>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            You can choose not to share information with us, but your experience
            of the site may be limited.
          </h5>
          <h5 className="text-primary">
            Until your account is deleted, you may still receive system emails.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Children Under 18 Years of Age</h4>
          <p>
            You must be 14 years and older to register to use the Verite Data
            Science, LLC website. As a result, Verite Data Science, LLC does not
            specifically collect information about children. If we learn that
            Verite Data Science, LLC has collected information from a child
            under the age of 13, we will delete that information as quickly as
            possible. We recommend that minors between the ages of 14 and 18 ask
            and receive their parents' permission before using Verite Data
            Science, LLC or sending information about themselves or anyone else
            over the Internet.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            Please register only if you are 18 or older. Otherwise obtain your
            parents' permission first.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Changes to this Privacy Policy</h4>
          <p>
            Verite Data Science, LLC may amend this Privacy Policy from time to
            time, at its sole discretion. Use of information we collect now is
            subject to the Privacy Policy in effect at the time such information
            is used. If we make changes to the Privacy Policy, we will notify
            you by posting an announcement on the Verite Data Science, LLC
            website so you are always aware of what information we collect, how
            we use it, and under what circumstances if any, it is disclosed.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            This policy may change. If it does we will let you know.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PagePrivacy;
