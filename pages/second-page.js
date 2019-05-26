import React from "react";
import PropTypes from "prop-types";
import { withNamespaces, Link } from "@config/i18n";

import List from "@components/List";

class SecondPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ["second-page"]
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        {t("标题")}
        <List />
      </div>
    );
  }
}

SecondPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withNamespaces("second-page")(SecondPage);
