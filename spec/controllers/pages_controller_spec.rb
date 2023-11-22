require 'rails_helper'

describe PagesController, type: :controller do
  describe 'GET #index' do
    before { get :index }

    it { is_expected.to respond_with(:success) }
    it { is_expected.to render_template("pages/index") }
  end
end
