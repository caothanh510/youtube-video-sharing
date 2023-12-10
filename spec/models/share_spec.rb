require 'rails_helper'

RSpec.describe Share, type: :model do
  describe "associations" do
    it { is_expected.to belong_to(:user) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:url) }

    describe "#validate" do
      describe "youtube_url_format" do
        subject { build(:share, url: url) } 

        before do
          subject.valid?
        end
  
        context "when url is Blank" do
          let(:url) { "" }
  
          it "has an error message" do
            expect(subject).to be_invalid 
            expect(subject.errors[:url]).to include("must be a valid YouTube video URL")
          end
        end
  
        context "when url is not a valid YouTube video URL" do
          let(:url) { "https://google.com/" }
  
          it "has an error message" do
            expect(subject).to be_invalid 
            expect(subject.errors[:url]).to include("must be a valid YouTube video URL")
          end
        end
  
        context "when url is not a valid URL" do
          let(:url) { "invalid_url" }
  
          before do
            allow(URI).to receive(:parse).and_raise(URI::InvalidURIError)
          end
  
          it "has an error message" do
            expect(subject).to be_invalid 
            expect(subject.errors[:url]).to include("is not a valid URL")
          end
        end
      end
    end
  end  
end
 