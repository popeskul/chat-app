# frozen_string_literal: true

require 'i18n'

# Helpers for features
module TranslateHelpers
  def t(key, **options)
    I18n.t(key, **options)
  end
end
