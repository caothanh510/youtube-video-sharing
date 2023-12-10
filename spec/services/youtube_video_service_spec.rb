require 'rails_helper'

describe YoutubeVideoService, type: :service do
  let!(:share) { build(:share, url: url) }

  subject { described_class.new(url: share.url) }

  describe '#perform' do
    context "when url is PRESENT" do
      let(:url) { 'https://www.youtube.com/watch?v=x0j_qubuOuM' }

      it 'returns a hash with video details' do
        expect(subject.perform).to eq(
          {
            id: 'x0j_qubuOuM',
            title: 'Save Our Date #08092023 #T&T',
            description: ''
          }
        )
      end
    end

    context "when url is NOT PRESENT" do
      let(:url) { nil }

      it 'returns an empty hash' do
        expect(subject.perform).to eq({})
      end
    end
  end
end
