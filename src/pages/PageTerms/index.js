import React, { useEffect } from 'react';

const PageTerms = () => {
  // Set the page title using the useEffect hook
  useEffect(() => {
    document.title = `Verite Data Science • Terms`;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col">
          <h1 className="display-4 text-primary">
            Verite Data Science, LLC Terms of Use
          </h1>
          <p className="lead">
            Your use of our service is governed by these terms. By using our
            website, you are accepting these terms.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Acceptance Of Terms</h4>
          <p>
            The web pages available at Verite Data Science, LLC.com and all
            linked pages (“Site”), are owned and operated by Verite Data
            Science, LLC, Inc. (“Verite Data Science, LLC”) a Canadian
            corporation and is accessed by you under the Terms of Use described
            below (“Terms”).
          </p>
          <p>
            Please read these terms carefully before using the services. By
            accessing the site, viewing any content or using any services
            available on the site (as each is defined below) you are agreeing to
            be bound by these terms, which together with our Privacy policy,
            governs our relationship with you in relation to the site. If you
            disagree with any part of the terms then you may not access the
            site.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            By using Verite Data Science, LLC you agree to all our terms.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Description Of Service</h4>
          <p>
            The Site is an online community which enables people to conduct and
            participate in instant group polling (“Services”). Services include,
            but are not limited to, any service and/or content Verite Data
            Science, LLC makes available to or performs for you, as well as
            anything displayed, transmitted or performed on the Site or through
            the Services. Content (“Content”) includes, but is not limited to
            text, information, data, graphics, blog articles, photographs,
            images, illustrations, and software.
          </p>
          <p>
            Your access to and use of the Site may be interrupted from time to
            time as a result of equipment malfunction, updating, maintenance or
            repair of the Site or any other reason within or outside the control
            of Verite Data Science, LLC. Verite Data Science, LLC reserves the
            right to suspend or discontinue the availability of the Site and/or
            any Service and/or remove any Content at any time at its sole
            discretion and without prior notice. Verite Data Science, LLC may
            also impose limits on certain features and Services or restrict your
            access to parts of or all of the Site and the Services without
            notice or liability. The Site should not be used or relied upon for
            storage of your polls you are directed to retain your own copies of
            all Content posted on the Site.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We provide services to create online polls and we will develop more
            features and services in the future. At times things can go wrong
            and the service may be interrupted.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Registration</h4>
          <p>
            As a condition to using Services, you are required to open an
            account with Verite Data Science, LLC and select a password and
            username, and to provide registration information. The registration
            information you provide must be accurate, complete, and current at
            all times. Failure to do so constitutes a breach of the Terms, which
            may result in immediate termination of your Verite Data Science, LLC
            account.
          </p>
          <p>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trade mark that
            is subject to any rights of another person or entity other than you
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            password and are solely responsible for all activities resulting
            from the use of your password and conducted through your Verite Data
            Science, LLC account.
          </p>
          <p>
            Services are available only to iniduals who are either (i) at least
            18 years old, or (ii) at least 14 years old, and who are authorized
            to access the Site by a parent or legal guardian. If you have
            authorized a minor to use the Site, you are responsible for the
            online conduct of such minor, and the consequences of any misuse of
            the Site by the minor.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            To fully use the services you need to create your own account,
            without violating anyone elses rights.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">User Conduct</h4>
          <p>
            All Content posted or otherwise submitted to the Site is the sole
            responsibility of the account holder from which such Content
            originates and you acknowledge and agree that you, and not Verite
            Data Science, LLC are entirely responsible for all Content that you
            post, or otherwise submit to the Site. Verite Data Science, LLC does
            not control user submitted Content and, as such, does not guarantee
            the accuracy, integrity or quality of such Content. You understand
            that by using the Site you may be exposed to Content that is
            offensive, indecent or objectionable.
          </p>
          <p>
            As a condition of use, you promise not to use the Services for any
            purpose that is unlawful or prohibited by these Terms, or any other
            purpose not reasonably intended by Verite Data Science, LLC. By way
            of example, and not as a limitation, you agree not to use the
            Services:
          </p>
          <ul>
            <li>
              To abuse, harass, threaten, impersonate or intimidate any person;
            </li>
            <li>
              To post or transmit, or cause to be posted or transmitted, any
              Content that is libellous, defamatory, obscene, pornographic,
              abusive, offensive, profane, or that infringes any copyright or
              other right of any person;
            </li>
            <li>
              For any purpose (including posting or viewing Content) that is not
              permitted under the laws of the jurisdiction where you use the
              Services;
            </li>
            <li>
              To post or transmit, or cause to be posted or transmitted, any
              communication or solicitation designed or intended to obtain
              password, account, or private information from any Verite Data
              Science, LLC user;
            </li>
            <li>
              To create or transmit unwanted ‘spam’ to any person or any URL;
            </li>
            <li>To post copyrighted Content which doesn’t belong to you;</li>
            <li>
              With the exception of accessing RSS feeds, you will not use any
              robot, spider, scraper or other automated means to access the Site
              for any purpose without our express written permission.
              Additionally, you agree that you will not: (i) take any action
              that imposes, or may impose in our sole discretion an unreasonable
              or disproportionately large load on our infrastructure; (ii)
              interfere or attempt to interfere with the proper working of the
              Site or any activities conducted on the Site; or (iii) bypass any
              measures we may use to prevent or restrict access to the Site;
            </li>
            <li>
              To artificially inﬂate or alter vote counts, blog counts,
              comments, or any other Service or for the purpose of giving or
              receiving money or other compensation in exchange for votes, or
              for participating in any other organized effort that in any way
              artificially alters the results of Services;
            </li>
            <li>
              To advertise to, or solicit, any user to buy or sell any products
              or services, or to use any information obtained from the Services
              in order to contact, advertise to, solicit, or sell to any user
              without their prior explicit consent;
            </li>
            <li>To promote or sell Content of another person;</li>
            <li>To sell or otherwise transfer your profile;</li>
            <li>
              To report a suspected abuse of the Site or a breach of the Terms
              (other than relating to copyright infringement which is addressed
              under “COPYRIGHT COMPLAINTS” below) please send written notice to
              Verite Data Science, LLC.
            </li>
          </ul>
          <p>
            You are solely responsible for your interactions with other users of
            the Site. Verite Data Science, LLC reserves the right, but has no
            obligation, to monitor disputes between you and other users.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            You cannot use our site to harass people, send spam, and do other
            crazy stuff. Be reasonable and responsible, don't do anything stupid
            and you'll be fine.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Copyright Complaints</h4>
          <p>
            Verite Data Science, LLC respects the intellectual property rights
            of others. It is our policy to respond promptly any claim that
            Content posted on the Site infringes the copyright or other
            intellectual property infringement (“Infringement”) of any person.
            Verite Data Science, LLC will use reasonable efforts to investigate
            notices of alleged Infringement and will take appropriate action
            under applicable intellectual property law and these Terms where it
            believes an Infringement has taken place, including removing or
            disabling access to the Content claimed to be infringing and/or
            terminating accounts and access to the Site.
          </p>
          <p>
            To notify Verite Data Science, LLC of a possible Infringement you
            must submit your notice in writing to the attention of “Copyright
            Infringement” and include in your notice a detailed description of
            the alleged Infringement sufficient to enable Verite Data Science,
            LLC to make a reasonable determination. Please note that you may be
            held accountable for damages (including costs and attorneys’ fees)
            for misrepresenting that any Content is infringing your copyright.
          </p>
          <p>
            If we remove or disable access to Content in response to a notice of
            Infringement, we will make reasonable attempts to contact the user
            who posted the affected Content. If you feel that your Content is
            not infringing, you may provide Verite Data Science, LLC with a
            counter notice in writing to the attention of “Copyright
            Infringement Counter Notification”. You must include in your counter
            notice sufficient information to enable Verite Data Science, LLC to
            make a reasonable determination. Please note that you may be held
            accountable for damages (including costs and attorneys' fees) if you
            materially misrepresent that your Content is not infringing the
            copyrights of others.
          </p>
          <p>
            If you are uncertain whether an activity constitutes Infringement,
            we recommended seeking advice of an attorney.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We respect copyright. If anything is wrong, please send us an email
            with all the details.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Trademarks</h4>
          <p>
            Verite Data Science, LLC, Verite Data Science, LLC.com and other
            Verite Data Science, LLC graphics, logos, designs, page headers,
            button icons, scripts, and service names are registered trademarks,
            trademarks or trade dress of Verite Data Science, LLC. Verite Data
            Science, LLC’s trademarks and trade dress may not be used in
            connection with any product or service without the prior written
            consent of Verite Data Science, LLC. The images and icons available
            in the Verite Data Science, LLC icon pack may used by partners and
            third party sites in connection with providing appropriate links to
            the Verite Data Science, LLC Site.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            As we respect others, please respect our trademarks and brands.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Release And Indemnity</h4>
          <p>
            You hereby expressly and irrevocably release and forever discharge
            Verite Data Science, LLC, its affiliated and associated companies,
            and their respective directors, officers, employees, agents,
            representatives, independent and dependent contractors, licensees,
            successors and assigns of and from any and all actions, causes of
            action, suits, proceedings, liability, debts, judgments, claims and
            demands whatsoever in law or equity which you ever had, now have, or
            hereafter can, shall or may have, for or by reason of, or arising
            directly or indirectly out of your use of the Site and the Services.
          </p>
          <p>
            You hereby agree to indemnify and hold harmless Verite Data Science,
            LLC, its affiliated and associated companies, and their respective
            directors, officers, employees, agents, representatives, independent
            and dependent contractors, licensees, successors and assigns from
            and against all claims, losses, expenses, damages and costs
            (including, but not limited to, direct, incidental, consequential,
            exemplary and indirect damages), and reasonable attorneys' fees,
            resulting from or arising out of (i) a breach of these Terms, (ii)
            Content posted on the Site, (iii) the use of the Services, by you or
            any person using your account or Verite Data Science, LLC Username
            and password, or (iv) any violation of any rights of a third party.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We are not liable if something goes wrong.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Limitation Of Liability</h4>
          <p>
            In no event shall Verite Data Science, LLC be liable under contract,
            tort, strict liability, negligence or other Legal theory with
            respect to the site, the service or any content (i) for any lost
            profits or Special, indirect, incidental, punitive, or consequential
            damages of any kind whatsoever, (ii)
          </p>
          <p>
            To provide substitute goods or services (however arising), or (iii)
            for any direct damages in Excess of (in the aggregate) $100.You must
            be 14 years and older to register to use the Verite Data Science,
            LLC website. As a result, Verite Data Science, LLC does not
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
            Again, we are not liable. But we may pay you $100 if our server
            flies into your window.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Miscellaneous</h4>
          <p>
            No agency, partnership, joint venture, or employment is created as a
            result of the Terms and you do not have any authority of any kind to
            bind Verite Data Science, LLC in any respect whatsoever. The failure
            of either party to exercise in any respect any right provided for
            herein shall not be deemed a waiver of any further rights hereunder.
            Verite Data Science, LLC shall not be liable for any failure to
            perform its obligations hereunder where such failure results from
            any cause beyond Verite Data Science, LLC’s reasonable control,
            including, without limitation, mechanical, electronic or
            communications failure or degradation (including "line-noise"
            interference). If any provision of the Terms is found to be
            unenforceable or invalid, that provision shall be limited or
            eliminated to the minimum extent necessary so that the Terms shall
            otherwise remain in full force and effect and enforceable. Verite
            Data Science, LLC may transfer, assign or delegate the Terms and its
            rights and obligations without consent. The Terms shall be governed
            by and construed in accordance with the laws of Ontario, as if made
            within Ontario between two residents thereof, and the parties submit
            to the exclusive jurisdiction of Ontario courts. Both parties agree
            that the Terms is the complete and exclusive statement of the mutual
            understanding of the parties and supersedes and cancels all previous
            written and oral agreements, communications and other understandings
            relating to the subject matter of the Terms, and that all
            modifications must be in a writing signed by both parties, except as
            otherwise provided herein.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            All manner of crazy things can happen — we are not responsible,
            really.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Termination</h4>
          <p>
            Verite Data Science, LLC may terminate or suspend any and all
            Services and/or your Verite Data Science, LLC account immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach the Terms. Upon
            termination of your account, your right to use the Services will
            immediately cease. If you wish to terminate your Verite Data
            Science, LLC account, you may simply discontinue using the Services.
            All provisions of the Terms which by their nature should survive
            termination shall survive termination, including, without
            limitation, ownership provisions, warranty disclaimers, indemnity
            and limitations of liability.
          </p>
          <p>
            It is your responsibility to remove all Content from your account
            prior to termination. Upon termination of your account Verite Data
            Science, LLC will automatically remove all Content posted to your
            account.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            We may stop providing services at any time. You can stop using your
            account or close it at any time as well.
          </h5>
        </div>
      </div>
      <hr className="soften" />
      <div className="row">
        <div className="col-sm-8">
          <h4 className="text-primary">Change</h4>
          <p>
            Verite Data Science, LLC reserves the right, at its sole discretion,
            to modify or replace the terms at any time. If the alterations
            constitute a material change to the terms, Verite Data Science, LLC
            will notify you by posting an announcement on the site. What
            constitutes a material change will be determined at Verite Data
            Science, LLC’s sole discretion. You shall be responsible for
            reviewing and becoming familiar with any such modifications. Using
            any service or viewing any content following notification of a
            material change to the terms shall constitute your acceptance of the
            Terms as modified.
          </p>
        </div>
        <div className="col-sm-4 hidden-xs">
          <h5 className="text-muted">Basically,</h5>
          <h5 className="text-primary">
            If these terms of use change, we will notify you.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default PageTerms;
