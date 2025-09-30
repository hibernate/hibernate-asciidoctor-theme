# -*- coding: utf-8 -*- #
# frozen_string_literal: true
require 'rouge' unless defined? ::Rouge.version

module Rouge
  module Themes
    class Hibernate < CSSTheme
      name 'hibernate'

      palette :background 		=> '#f3f4f6'
      palette :text 			=> '#1f2937'
      palette :string 			=> '#008201'
      palette :keyword 			=> '#3c529a'
      palette :meta 			=> '#999100'
      palette :type 			=> '#115264'
      palette :constant 		=> '#00647e'
      palette :package 			=> '#1f2937'
      palette :comment 			=> '#8d8d8d'
      palette :preprocessor 	=> '#579'
      palette :function 		=> '#00627A'

      palette :black          => '#1b1d1e'
      palette :white          => '#f8f8f2'
      palette :blue           => '#66d9ef'
      palette :green          => '#a6e22e'
      palette :grey           => '#403d3d'
      palette :red            => '#f92672'
      palette :light_grey     => '#465457'
      palette :dark_blue      => '#5e5d83'
      palette :violet         => '#af87ff'
      palette :yellow         => '#d7d787'

      style Comment,
            Comment::Multiline,
            Comment::Single,                  :fg => :comment, :italic => true
      style Comment::Preproc,                 :fg => :preprocessor, :bold => true
      style Comment::Special,                 :fg => :light_grey, :italic => true, :bold => true

      style Error,                            :fg => :white, :bg => :grey
      style Generic::Inserted,                :fg => :text
      style Generic::Deleted,                 :fg => :red
      style Generic::Emph,                    :italic => true
      style Generic::Strong,                  :italic => false, :bold => true
      style Generic::Error,
            Generic::Traceback,               :fg => :red
      style Generic::Heading,                 :fg => :text
      style Generic::Output,                  :fg => :grey
      style Generic::Prompt,                  :fg => :text
      style Generic::Strong,                  :bold => true
      style Generic::Subheading,              :fg => :text
      style Keyword,
            Keyword::Constant,
            Keyword::Declaration,
            Keyword::Pseudo,
            Keyword::Reserved,
            Keyword::Type,                    :fg => :keyword, :bold => true
      style Keyword::Namespace,
            Operator::Word,
            Operator,                         :fg => :keyword, :bold => true
      style Literal::Number::Float,
            Literal::Number::Hex,
            Literal::Number::Integer::Long,
            Literal::Number::Integer,
            Literal::Number::Oct,
            Literal::Number,
            Literal::String::Escape,          :fg => :constant
      style Literal::String::Backtick,
            Literal::String::Char,
            Literal::String::Doc,
            Literal::String::Double,
            Literal::String::Heredoc,
            Literal::String::Interpol,
            Literal::String::Other,
            Literal::String::Regex,
            Literal::String::Single,
            Literal::String::Symbol,
            Literal::String,                  :fg => :string
      style Name::Attribute,                  :fg => :function
      style Name::Decorator,
            Name::Exception,
            Name::Function,                   :fg => :function, :bold => true
      style Name::Decorator,                  :fg => :meta, :bold => true
      style Name::Class,                      :fg => :text, :bold => true
      style Name::Constant,                   :fg => :text
      style Name::Builtin::Pseudo,
            Name::Builtin,
            Name::Entity,
            Name::Namespace,
            Name::Variable::Class,
            Name::Variable::Global,
            Name::Variable::Instance,
            Name::Variable,
            Text::Whitespace,                 :fg => :text
      style Name::Label,                      :fg => :text, :bold => true
      style Name::Tag,                        :fg => :keyword
      style Text,                             :fg => :text, :bg => :background
    end
  end
end
